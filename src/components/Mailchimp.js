import React from "react";
import Mailchimp from "react-mailchimp-form";

console.log(process.env)

export default function MailchimpForm(props) {
  return (
    <Mailchimp
      action={`https://nightsnackclub.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_KEY}&id=${process.env.REACT_APP_MAILCHIMP_ID}`}
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
