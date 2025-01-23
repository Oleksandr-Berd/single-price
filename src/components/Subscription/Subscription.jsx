import * as SC from "./SubscriptionCustom"

const Subscription = () => {
  return (
    <SC.SubscriptionCustom>
      <h3>Monthly Subscription</h3>
      <SC.SubscriptionPrice>
        <h4>$29</h4>
        <p>per month</p>
      </SC.SubscriptionPrice>
      <p>Full access for less than $1 a day</p>
      <SC.SubscriptionButton type="button">Sign up</SC.SubscriptionButton>
    </SC.SubscriptionCustom>
  );
};

export default Subscription;
