import React from "react";
import Mailchimp from "react-mailchimp-form";
import { mailchimp_key } from '../secrets'

export default function MailchimpForm(props) {
  return (
    <Mailchimp
      action={mailchimp_key}
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
