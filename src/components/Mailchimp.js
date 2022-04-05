import React from "react";
import Mailchimp from "react-mailchimp-form";
import { mailchimp_key } from '../secrets'

export default function MailchimpForm(props) {
  return (
    <Mailchimp
      action={`https://nightsnackclub.us20.list-manage.com/subscribe/post?u=${process.env.MAILCHIMP_U}&id=${process.env.MAILCHIMP_ID}`}
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
