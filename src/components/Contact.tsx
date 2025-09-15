import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [emailError, setEmailError] = useState(''); // This line should be there
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time email validation
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate required fields
    if (!formData.email || !formData.subject) {
      setSubmitStatus('validation');
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Using Formspree - replace YOUR_FORM_ID with your actual form ID
      const response = await fetch('https://formspree.io/f/xgvlbkvk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim() || 'Anonymous',
          email: formData.email,
          subject: formData.subject,
          message: formData.message || 'No message provided'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
        setEmailError('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-1 md:px-6 bg-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Let's Build Something Together
          </span>
        </h2>
        
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          I'm always excited to discuss new opportunities, collaborate on innovative projects, 
          or simply connect with fellow developers and AI enthusiasts.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 p-6">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:sashidhar498@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">sashidhar498@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/sashidhar498" 
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">github.com/sashidhar498</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/sabbusashidhar" 
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/sabbusashidhar</p>
                  </div>
                </a>
              </div>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 p-6">
              <h3 className="text-xl font-semibold mb-4">What I Can Help With</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Machine Learning & AI Development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Computer Vision Applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Python Development & Automation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Web Application Development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Technical Consulting & Mentoring
                </li>
              </ul>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-shadow duration-300 p-6">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            {submitStatus === 'validation' && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2 text-yellow-700">
                <AlertCircle className="h-5 w-5" />
                <span>Please fill in all required fields (Email and Subject).</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
                <AlertCircle className="h-5 w-5" />
                <span>Failed to send message. Please try again or email me directly.</span>
              </div>
            )}
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input 
                    name="firstName"
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input 
                    name="lastName"
                    placeholder="Doe" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input 
                  type="email" 
                  name="email"
                  placeholder="john.doe@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className={emailError ? 'border-red-300 focus:border-red-500' : ''}
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {emailError}
                  </p>
                )}
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="subject"
                  placeholder="Let's collaborate on an AI project" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  name="message"
                  placeholder="Tell me about your project or how we can work together..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              
              <Button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={isSubmitting || !!emailError}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-2">
                <span className="text-red-500">*</span> Required fields
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;