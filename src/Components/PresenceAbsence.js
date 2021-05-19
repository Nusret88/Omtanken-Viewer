import React, { useState, useContext } from "react";
import { Table, Image, Header, Label } from "semantic-ui-react";
import omtanken from "../Images/omtanken.png";
import { SlideContext } from "../Context/SlideContext";

export default function PresenceAbsence() {
	const { presence, absence, presenceDetail, absenceDetail } =
		useContext(SlideContext);
	const imageProps = {
		avatar: true,
		spaced: "right",
		src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
	};

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
									<Table.Cell>
										<Label
											className="LabelContent"
											as="b"
											content={presence[idx]}
											image={imageProps}
										/>
										<Label
											className="PresenceDescription"
											as="p"
											content={presenceDetail[idx]}
										/>
									</Table.Cell>
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
									<Table.Cell>
										<Label
											className="LabelContent"
											as="b"
											content={absence[idx]}
											image={imageProps}
										/>
										<Label
											className="AbsenceDescription"
											as="p"
											content={absenceDetail[idx]}
										/>
									</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</div>
		</div>
	);
}
