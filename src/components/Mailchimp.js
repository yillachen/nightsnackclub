import React from "react";
import Mailchimp from "react-mailchimp-form";

export default function MailchimpForm(props) {
  return (
    <Mailchimp
      action={process.env.REACT_APP_MAILCHIMP_KEY}
      fields={[
        {
          name: "EMAIL",
          placeholder: "Email Address",
          type: "email",
          required: true,
        },
      ]}
    />
  );
}
