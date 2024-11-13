import React from 'react';
import { motion } from 'framer-motion';
import './IntegrationsSection.css'; // Custom CSS file for layout
import { BsArrowRight } from 'react-icons/bs';

// Sample icons (replace with actual icons in your assets)
const documentationFeatures = [
  {
    title: "Public Docs",
    subtitle: "Publish unbeatable documentation",
    description: "Effortlessly migrate your product docs to GitBook, customize them to match your brand, then publish them to the world — or just a selected group, if you prefer. Keep them updated with built-in content insights.",
  },
  {
    title: "Internal Docs",
    subtitle: "Better internal docs",
    description: "Find the perfect new home for your organization’s code docs, technical wikis, product plans, API documentation, and more. GitBook is flexible and uses a Git-like branching workflow your team will love.",
  },
  {
    title: "Git Sync",
    subtitle: "Collaborate on docs like you collaborate on code",
    description: "Sync your docs with a GitHub or GitLab repository so everyone can contribute to your docs, wherever they prefer to work. Technical writers can use a WYSIWYG editor, while engineers add to docs directly in Git. Everything stays in sync, with feedback and reviews to guarantee quality.",
  },
];


const IntegrationsSection = () => {
  return (
    <div className="integrations-section">
      <div className="integrations-content">
        <motion.div
          className="title"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Integrate with your stack</h2>
          <p>Install one of our verified integrations, or build your own with our API. Because a great knowledge management system should work with everything you use on a daily basis.</p>
        </motion.div>

        <div className='features'>
          {documentationFeatures.map(({title,subtitle,description},i) => (
            <div key={i}>
              <div className='content'>
                <small>{title}</small>
                <h3>{subtitle}</h3>
                <p>{description}</p>
                <button className=''>Learn more <BsArrowRight/></button>
              </div>
              <div className='image'>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;
