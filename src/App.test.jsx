import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { cvData } from './data';

describe('App Component', () => {
  it('renders the hero section with name and title', () => {
    render(<App />);
    expect(screen.getByText(cvData.personalInfo.name)).toBeInTheDocument();
    expect(screen.getByText(cvData.personalInfo.title)).toBeInTheDocument();
  });

  it('renders all main sections', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Work Experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Education/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Leadership & Organizations/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Featured Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Certifications & Credentials/i })).toBeInTheDocument();
  });

  it('renders the Navbar with navigation links and theme switches', () => {
    render(<App />);
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /light theme/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /dark theme/i })).toBeInTheDocument();
  });

  it('handles theme toggling', () => {
    render(<App />);
    const darkBtn = screen.getByRole('radio', { name: /dark theme/i });
    fireEvent.click(darkBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    const lightBtn = screen.getByRole('radio', { name: /light theme/i });
    fireEvent.click(lightBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
