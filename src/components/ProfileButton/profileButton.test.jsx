import { render, screen } from "@testing-library/react";
import { useContext } from "react";
import ProfileButton from "./ProfileButton";

jest.mock('react', () => {
  const originalModule = jest.requireActual('react');
  return {
    ...originalModule,
    useContext: jest.fn()
  }
});

describe('Profile Button', () => { 
  test('Profile Button renderiza correctamente', () => {
    useContext.mockReturnValue({user: {name: 'username', image: 'userImage'}});
    render(<ProfileButton />);
    expect(screen.getByText('username')).toBeInTheDocument();
    let img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'userImage');
  });
});