import styled from 'styled-components';

interface StyledParagraphProps {
    bold: boolean;
    italic: boolean;
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
    font-size: 12;
    font-weight: ${props => props.bold? 'bold' : null};
    font-style: ${props => props.italic? 'italic': null};
`;