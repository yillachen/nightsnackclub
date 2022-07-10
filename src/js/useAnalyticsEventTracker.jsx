import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Blog Post") => {
  const eventTracker = (action = "Click", label = "Label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

export default useAnalyticsEventTracker;
