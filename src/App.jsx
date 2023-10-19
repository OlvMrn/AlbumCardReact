import AlbumCard from './components/albumCard'
import './App.css'

const albumsData = [
  {
    id: 1,
    band: "Arctic Monkeys",
    title: "AM",
    year: "2013",
    songs: [
      "1.Do I Wanna Know?",
      "2.R U Mine?",
      "3.One for the Road",
      "4.Arabella",
      "5.I Want It All",
      "6.No.1 Party Anthem",
      "7.Mad Sounds",
      "8.Fireside",
      "9.Why'd You Only Call Me When You're High?",
      "10.Snap Out of It",
      "11.Knee Socks",
      "12.I Wanna Be Yours (Turner, John Cooper Clarke)"
    ],
    cover: "src/assets/am.jpg"
  }
];

function App() {

  return (
    <div>
      <AlbumCard {...albumsData[0]} />
    </div>
  )
}

export default App;
