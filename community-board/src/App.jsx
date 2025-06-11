import './App.css';
import Card from './components/Card';

const App = () => {
  const events = [
    { title: 'React Workshop', description: 'Learn the basics of React.', link: 'https://reactjs.org/' },
    { title: 'JavaScript Meetup', description: 'Discuss JS trends and tools.', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { title: 'CSS Masterclass', description: 'Advanced CSS techniques.', link: 'https://css-tricks.com/' },
    { title: 'Hackathon', description: 'Collaborate and build projects.', link: 'https://hackathon.com/' },
    { title: 'Tech Talk', description: 'Insights from industry leaders.', link: 'https://www.ted.com/topics/technology' },
    { title: 'Open Source 101', description: 'Contribute to open-source projects.', link: 'https://opensource.guide/' },
    { title: 'AI Seminar', description: 'Explore AI and ML concepts.', link: 'https://ai.google/' },
    { title: 'Web Dev Bootcamp', description: 'Full-stack web development.', link: 'https://www.freecodecamp.org/' },
    { title: 'Networking Event', description: 'Meet professionals in tech.', link: 'https://www.meetup.com/' },
    { title: 'Career Fair', description: 'Find your next opportunity.', link: 'https://www.linkedin.com/' },
  ];

  return (
    <div className="App">
      <header className="app-header">
        <h1>Community Board</h1>
        <p>Explore events and resources for our tech community!</p>
      </header>
      <div className="card-grid">
        {events.map((event, index) => (
          <Card key={index} title={event.title} description={event.description} link={event.link} />
        ))}
      </div>
    </div>
  );
};

export default App;

