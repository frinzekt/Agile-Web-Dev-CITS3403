import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';
import { Agenda, Day, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';
import './App.css';
import React from 'react';
import logo from './logo.svg';

class App extends React.Component {
	state = {
		data: [
			{
				Id: 2,
				Subject: 'Meeting',
				StartTime: new Date(2018, 1, 15, 10, 0),
				EndTime: new Date(2018, 1, 15, 12, 30),
				IsAllDay: false,
				Status: 'Completed',
				Priority: 'High'
			}
		]
	};
	render() {
		return (
			<ScheduleComponent
				height='550px'
				selectedDate={new Date(2018, 1, 15)}
				eventSettings={{
					dataSource: this.state.data,
					fields: {
						id: 'Id',
						subject: { name: 'Subject' },
						isAllDay: { name: 'IsAllDay' },
						startTime: { name: 'StartTime' },
						endTime: { name: 'EndTime' }
					}
				}}
			>

				<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
			</ScheduleComponent>
		);
	}
}

export default App;
