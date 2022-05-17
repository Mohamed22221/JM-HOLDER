import React from 'react'
import styled from 'styled-components'
import HeaderJops from '../Components/jops/HeaderJops'
import SectionApply from '../Components/jops/SectionApply'
const Jops = () => {
  return (
    <StyleJops>
        <HeaderJops />
        <SectionApply />
    </StyleJops>
  )
}
const StyleJops= styled.div`
`
export default Jops