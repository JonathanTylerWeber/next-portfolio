import React from "react";

interface EmailTemplateProps {
  email: string;
  name: string;
  subject: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  name,
  subject,
  text,
}) => (
  <div>
    <h1>New Message from {name}</h1>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Subject:</strong> {subject}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{text}</p>
  </div>
);
