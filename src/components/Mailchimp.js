import React from "react";
import Mailchimp from "react-mailchimp-form";

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
      messages={{
        sending: "Sending...",
        success: "Success!",
        error: "Error sending. Try again.",
        empty: "Email required.",
        duplicate: "Too many attempts. Try another email.",
        button: "Subscribe",
      }}
    />
  );
}
