import React, { useState } from "react";
import { Table, Image, Header } from "semantic-ui-react";
import omtanken from "../Images/omtanken.png";

export default function PresenceAbsence() {
	const [presence, setPresence] = useState([
		"Första personen",
		"Andra Presonen",
		"Tredje Personen",
	]);
	const [absence, setAbsence] = useState(["Fjärde Personen", "Femte Personen"]);
	return (
		<div>
			<div className="Presence-Header">
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Närvaro</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{presence.map((item, idx) => {
							return (
								<Table.Row>
									<Header as="h2">
										<Image
											circular
											src="https://icon-library.com/images/small-user-icon/small-user-icon-19.jpg"
										/>
                    </Header>
									<Table.Cell>{presence[idx]}</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</div>

			<div className="Absence-Header">
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Frånvaro</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{absence.map((item, idx) => {
							return (
								<Table.Row>
                  <Header as="h2">
										<Image
											circular
											src="https://icon-library.com/images/small-user-icon/small-user-icon-19.jpg"
										/>
                    </Header>
									<Table.Cell>{absence[idx]}</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</div>
		</div>
	);
}
