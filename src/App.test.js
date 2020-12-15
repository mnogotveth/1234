import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Components/Header';
import ReactTestUtils from 'react-dom/test-utils'; 


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



it('has an h2 tag', () => {
 
  const component = ReactTestUtils.renderIntoDocument(<Header/>);    
  var h2 = ReactTestUtils.findRenderedDOMComponentWithTag(
   component, 'h2'
 );
 
});




