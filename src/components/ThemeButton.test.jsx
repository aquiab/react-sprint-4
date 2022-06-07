import { render, screen } from "@testing-library/react";
import { useContext } from "react";
import ThemeButton from "./ThemeButton";

jest.mock("react", () => {
  const React = jest.requireActual("react");
  return {
    ...React,
    useContext: jest.fn(),
  };
});

describe('Theme Button', () => { 
  it('renders without crashing', () => {
    useContext.mockReturnValue({darkMode: false});
    render(<ThemeButton />);
    expect(screen.getByText(/tema/i)).toBeInTheDocument();
  });
});