import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  background-color: #161a1b;
`;
const CardBody = styled.div`
  display:flex
  flex-direction: row;
  width: 30rem;
`;

const AlbumTitle = styled.h2`
  font-size : 2rem;
  color: white;
  font-family: inter,sans-serif;
`;

const AlbumCover = styled.img`
  width: 30rem;
`;

const SongsList = styled.li`
  list-style: none;
  &:hover {
    text-shadow: 2px 3px 22px #c6ff29, 5px 6px 10px #0bfeee;}
`;

const Summary = styled.summary`
  cursor: pointer;
`;

const AlbumCard = ({band, title, year, songs, cover}) => {

  return (
    <Card>
      <AlbumCover src={cover} alt={title}/>
      <CardBody>
        <AlbumTitle>{band} - {title}</AlbumTitle>
        <h3>{year}</h3>
        <details>
          <Summary>
            12 songs
          </Summary>
          <ul>
            {songs.map((song, index) => (
              <SongsList key={index}>{song}</SongsList>
            ))}
          </ul>
        </details>
      </CardBody>
    </Card>
  ) 
}

export default AlbumCard;