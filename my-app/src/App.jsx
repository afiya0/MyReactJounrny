import MainCard from "./card/MainCard";
import './App.css'
function App() {
const users = [
  {
    badge: "story",
    name: "Afiya",
    achievement: "Frontend Developer",
    image: "https://i.pinimg.com/1200x/22/f0/3f/22f03f271fce896c380468d9179ce3ba.jpg",
    des: "Designer",
  },
  {
    badge: "story",
    name: "Afiya",
    achievement: "Frontend Developer",
    image: "https://i.pinimg.com/1200x/22/f0/3f/22f03f271fce896c380468d9179ce3ba.jpg",
    des: "Developer",
  },
  {
    badge: "story",
    name: "Afiya",
    achievement: "Frontend Developer",
    image: "https://i.pinimg.com/1200x/22/f0/3f/22f03f271fce896c380468d9179ce3ba.jpg",
    des: "Frontend Engineer",
  },
];

  return (
    <div className="conta">
      {users.map((item, idx) => (
        <MainCard key={idx} user={item} />
      ))}
    </div>
  );
}

export default App;
