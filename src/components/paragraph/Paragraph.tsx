import React from 'react';
import { StyledParagraph } from './Paragraph.style';

interface ParagraphProps {
    italic?: boolean;
    bold?: boolean;
}

const Paragraph : React.FC<ParagraphProps>= ({italic = false, bold = false ,children}) => {
    return (
    <StyledParagraph italic={italic} bold={bold}>{children}</StyledParagraph>
    )
};

export default Paragraph;