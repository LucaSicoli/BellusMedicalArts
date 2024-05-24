import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request 

app = Flask(__name__)

@app.route('mail.py', methods=['POST'])
def send_email():
    # Extract form data
    name = request.form.get('name')
    email = request.form.get('email')
    phone = request.form.get('phone')
    message = request.form.get('message')

    # Email information
    sender_email = "your_email@example.com"
    receiver_email = "admin@bellusmedicalarts.com"
    subject = "Form Information"
    message = f"""
    Hello,

    Here is the information from the form:

    Name: {name}
    Email: {email}
    Phone: {phone}
    Message: {message}

    Best regards,
    Your Name
    """

    # Create a multipart message
    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = receiver_email
    msg["Subject"] = subject

    # Add the message body
    msg.attach(MIMEText(message, "plain"))

    # SMTP server configuration
    smtp_server = "smtp.example.com"
    smtp_port = 587
    smtp_username = "your_email@example.com"
    smtp_password = "your_password"

    # Create a secure connection with the SMTP server
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.send_message(msg)

    return "Email sent successfully"

if __name__ == '__main__':
    app.run()