import { render, screen } from "@testing-library/react";
import { useContext } from "react";
import Error from "./Error";

jest.mock('react', () => {
  const React = jest.requireActual('react');
  return {
    ...React,
    useContext: jest.fn(),
  };
});

describe('Page not found view', () => { 
  it('renders without crashing', () => {
    useContext.mockReturnValue({toggleSidebar: jest.fn()});
    render(<Error />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});