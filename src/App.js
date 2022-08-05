import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PlansView from "./components/PlansView";
import ContentsView from "./components/ContentsView";
import Content from "./components/Content";


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
      .get(`${url}/Plans/${planId}/contents`)
      .then((response) => {
        const updatedContents = [];
        const dataList = response.data;
        for (const data of dataList) {
          updatedContents.push(data);
        }
        setContents(updatedContents);
        setChosenPlan(planId);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // delete Plan (need to add endpoints)
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
        const updatedContents = contents.filter((content) => content.Content_id !== contentId);
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
      .post(`${url}/plans/${planId}/content`, requestBody)
      .then((response) => {
        const newContent = {
          content_id: response.data.content_id,
          plan_id: response.data.plan_id,
          message: response.data.message,
          like_count: response.data.like_count,
        };
        setContents([...contents, newContent]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateLikeCts = (contentId) => {
    const contentObj = contents.filter((content) =>content.content_id === contentId);
    axios
      .put(`http://127.0.0.1:5000/${contentId}`, {
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

  const testContent=({content:"How to cook Pasta", content_type:"text", plan_id:1, content_id:1})


  // default landing page
  if (chosenPlan === null) {
    return (
      <div>
        <h1>Hello Planner!</h1>
        <Content {...testContent}/>
        <PlansView
          planData={plans}
          selectPlanCallback={getContentsFromOnePlan}
          deletePlanCallback={deletePlan}
          makePlanCallback={onFormSubmitPlan}
        ></PlansView>
      </div>
    );
  }
  // render Contentsview when user choose certain Plan
  // need to add logic to set chosenPlan state back to null when user clicked 'x' button in Contentsview
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
        <h1>Plan : {userChoice.title}</h1>
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
