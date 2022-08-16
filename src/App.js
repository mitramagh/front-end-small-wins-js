import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GrowthPath from "./pages/GrowthPath";
import HappyToShare from "./pages/HappyToShare";
import Trash from "./pages/Trash";
import ToggleSwitch from "./components/ToggleSwitch";

import AddComment from "./components/AddComment";
import PlansView from "./components/PlansView";
import ContentsView from "./components/ContentsView";
import Content from "./components/Content";
import FileUpload from "./components/FileUpload";
import * as FaIcons from 'react-icons/fa';


function App() {
  const defaultPlans = [];
  const defaultContents = [];

  const url = "http://127.0.0.1:5000";
  // useState for Plan
  const [plans, setPlans] = useState(defaultPlans);
  // useState for Content
  const [contents, setContents] = useState(defaultContents);
  // useState to keep track of what Plan we're currently looking at (user's choice)
  const [chosenPlan, setChosenPlan] = useState(null);

  const [status, setStatus] = useState("In-progress");

  const [files, setFiles] = useState([]);

  // useEffect upon dom load
  useEffect(() => {
    // axios call, after promise is completed or rejected:
    axios
      .get(`${url}/plans`)
      .then((response) => {
        // iterate through each Plan and append to Plans
        const updatedPlans = [...plans];
        const dataList = response.data;
        for (const data of dataList) {
          updatedPlans.push(data);
        }
        // setStatus("Achieved! Kudos!!");
        setPlans(updatedPlans);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // PlanView -> PlanList, NewPlanButton, NewPlanForm (visible/invisible depending on NewPlanButton toggle): siblings easier ^^ -> all state at PlanView level to control NewPlanForm visibility

  //get all Contents from user chosen Plan -> pass down to Planlist
  const getContentsFromOnePlan = (planId) => {
    axios
      .get(`${url}/plans/${planId}/contents`)
      .then((response) => {
        const updatedContents = [];
        const dataList = response.data;
        for (const data of dataList) {
          updatedContents.push(data);
        }
        setContents(updatedContents);
        console.log(`chosenplan: ${planId}`);
        setChosenPlan(planId);
        console.log(dataList);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // update Plan Status
  const updatePlanStatus = (planId, checked) => {
    const routeWord = checked ? "mark_complete" : "mark_incomplete";
    axios
      .patch(`${url}/plans/${planId}/${routeWord}`)
      .then((response) => {
        const newPlans = [...plans];
        const idx = newPlans.findIndex((plan) => plan.id === planId);
        newPlans[idx] = response.data;
        console.log("hereeee", response.data);
        setPlans(newPlans);
      })
      .catch((err) => console.log(err));
  };
  // delete Plan
  const deletePlan = (planId) => {
    axios
      .delete(`${url}/plans/${planId}`)
      .then(() => {
        const updatedPlans = plans.filter((plan) => plan.id !== planId);
        setPlans(updatedPlans);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // delete Content
  const deleteContent = (contentId) => {
    axios
      .delete(`${url}/contents/${contentId}`)
      .then(() => {
        const updatedContents = contents.filter(
          (content) => content.content_id !== contentId
        );
        setContents(updatedContents);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // onformsubmitPlan
  const onFormSubmitPlan = (requestBody) => {
    axios
      .post(`${url}/plans`, requestBody)
      .then((response) => {
        const newPlan = {
          id: response.data.id,
          idea: requestBody.idea,
          planner: requestBody.planner,
          date: "Now",
        };
        setPlans([...plans, newPlan]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // on formsubmitContent
  const onFormSubmitContent = (planId, requestBody) => {
    axios
      .post(`${url}/plans/${planId}/contents`, requestBody)
      .then((response) => {
        const newContent = {
          content_id: response.data.content_id,
          plan_id: response.data.plan_id,
          type: response.data.type,
          content: response.data.content,
          like_count: response.data.like_count,
          comment: response.data.comment,
        };
        setContents([...contents, newContent]);
        console.log(newContent);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // add comments for planList
  const addComment = () => {
    console.log();
  };

  const updateLikeCts = (contentId) => {
    const contentObj = contents.filter(
      (content) => content.content_id === contentId
    );
    axios
      .put(`${url}/contents/${contentId}`, {
        like_count: contentObj.like_count + 1,
      })
      .then(() => {
        const updatedContents = contents.map((content) => {
          if (content.content_id === contentId) {
            content.like_count++;
          }
          return content;
        });
        setContents(updatedContents);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const testContent = {
    content: "How to cook Pasta",
    type: "text",
    plan_id: 1,
    content_id: 1,
  };

  // default landing page
  if (chosenPlan === null) {
    return (
      <div>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" exact element={Home} />
            <Route path="/login" element={<Home/>} />
            <Route path="/growthpath" element={<ContentsView />} />
            <Route path="/happytoshare" element={<ContentsView />} />
            <Route path="/trash" component={Trash} />
          </Routes>
        </Router>
        <h1>Hello Planner!</h1>
        {/* <Content {...testContent}/> */}
        <div>
          <PlansView
            planData={plans}
            selectPlanCallback={getContentsFromOnePlan}
            deletePlanCallback={deletePlan}
            makePlanCallback={onFormSubmitPlan}
            handleToggleCompleted={updatePlanStatus}
            handleAddComment={addComment}
          ></PlansView>
        </div>
      </div>
    );
  }
  // render Contentsview when user choose certain Plan
  else {
    let userChoice = null;
    for (const plan of plans) {
      if (plan.id === chosenPlan) {
        userChoice = plan;
        break;
      }
    }

    console.log(userChoice);
    return (
      <div>
         <div className='navbar ,menu-bars'>
        < FaIcons.FaLeaf />
       </div>
        <h1 className="pagetitle">Plan: <FaIcons.FaLeaf /> {userChoice.idea} <FaIcons.FaLeaf /></h1>
        <ContentsView
          contents={contents}
          updateLikes={updateLikeCts}
          deleteContent={deleteContent}
          submitContent={onFormSubmitContent}
          chosenPlan={chosenPlan}
          setChosenPlan={setChosenPlan}
          setContents={setContents}
        ></ContentsView>
      </div>
    );
  }
}

export default App;
