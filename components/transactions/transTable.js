import { Table, Row } from "@nextui-org/react";

export const TransTable = (props) => {
  const headerStyle = {
    backgroundColor: "#2B2F31",
    color: "#9BA1A6",
  };
  const rowStyle = {
    color: "white",
  };

  return (
    <div>
      {/* <h1>Hello</h1> */}
      <Row justify="center">
        <Table
          aria-label="Example table with static content"
          css={{
            height: "auto",
            th: headerStyle,
            tr: rowStyle,
          }}
        >
          <Table.Header>
            <Table.Column>NAME</Table.Column>
            <Table.Column>AMOUNT</Table.Column>
            <Table.Column>CATEGORY</Table.Column>
            <Table.Column>DATE</Table.Column>
            <Table.Column>DESCRIPTION</Table.Column>
          </Table.Header>
          <Table.Body>
            {props.transData.map((data) => {
              return (
                <Table.Row key={data.id}>
                  <Table.Cell>{data.name}</Table.Cell>
                  <Table.Cell>{data.amount}</Table.Cell>
                  <Table.Cell>
                    {props.catData[data.categoryId - 1]["name"]}
                  </Table.Cell>

                  <Table.Cell>{data.date}</Table.Cell>
                  {data.description ? (
                    <Table.Cell>{data.description}</Table.Cell>
                  ) : (
                    <Table.Cell>NA</Table.Cell>
                  )}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Row>
    </div>
  );
};
