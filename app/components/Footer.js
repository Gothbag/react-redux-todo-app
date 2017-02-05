import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <p>
        Show:
        {" "}
        <FilterLink filter="ALL">
            All
        </FilterLink>
        {", "}
        <FilterLink filter="TODO">
            To do
        </FilterLink>
        {", "}
        <FilterLink filter="DONE">
            Done
        </FilterLink>
    </p>
)

export default Footer