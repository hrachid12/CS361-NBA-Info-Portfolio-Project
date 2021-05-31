import CardColumns from 'react-bootstrap/CardColumns';
import TeamListItem from './TeamListItem';
import Team from '../../models/Team';

const TeamList: React.FC<{ teams: Team[] }> = (props) => {
    return (
        <CardColumns>
            {props.teams.map( team => <TeamListItem key={team.id} team={team} />)}
        </CardColumns>
    );
}

export default TeamList;