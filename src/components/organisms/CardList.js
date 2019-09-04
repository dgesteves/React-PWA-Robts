import React from 'react';
import {useSelector} from 'react-redux';

import Card from '../molecules/Card';

function CardList() {

  const searchTerm = useSelector(state => state.searchTerm);

  const robots = useSelector(state => state.robots);

  const filteredRobots = robots.filter(
      robot => robot.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
      <div>
        {filteredRobots.map(
            ({id, name, email}) => <Card key={id} id={id} name={name}
                                         email={email} />)}
      </div>
  );
}

export default CardList;