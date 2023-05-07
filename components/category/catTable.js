import { Table, Row } from '@nextui-org/react';

export const CatTable = (props) => {
    const headerStyle = {
        backgroundColor: '#2B2F31',
        color: '#9BA1A6',
    };
    const rowStyle = {
        color: 'white',
    };
  
    return (
        <div>
          <Row justify='center'>
            <Table
                aria-label="Example table with static content"
                    css={{
                      height: "auto",
                      th: headerStyle,
                      tr: rowStyle,
                    }}
            >
              <Table.Header>
                <Table.Column>CATEGORY</Table.Column>
                {/* <Table.Column>TYPE</Table.Column> */}
                <Table.Column>ACTION</Table.Column>
              </Table.Header>
              <Table.Body>
                {props.catData.map((data) => {
                  return(
                      <Table.Row key={data.id}>
                        <Table.Cell>{props.catData[data.id - 1]['name']}</Table.Cell>
                        <Table.Cell></Table.Cell>
                        
                        
                      </Table.Row>
                  )
                })}
              </Table.Body>
            </Table>
          </Row>
        </div>
    )
}
