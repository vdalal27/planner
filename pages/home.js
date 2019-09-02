import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const PostLink = props => ( //dynamic pages
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}> 
        <a>{props.id}</a> 
      </Link>
    </li>
); //pass data as query string parameter

export default function Home(){
    return(
        <div>
            <Layout>
                <Table id='table'>
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Monday</Th>
                            <Th>Tuesday</Th>
                            <Th>Wednesday</Th>
                            <Th>Thursday</Th>
                            <Th>Friday</Th>
                            <Th>Saturday</Th>
                            <Th>Sunday</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Breakfast</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td>Snack 1</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td>Lunch</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td>Snack 2</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td>Dinner</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            <h1>Planner</h1>
            <ul>
                <PostLink id="Breakfast" />
                <PostLink id="Lunch" />
                <PostLink id="Snack" />
                <PostLink id="Dinner" />
            </ul>
            </Layout>
        </div>
    );
}

