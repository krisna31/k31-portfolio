import { render, screen } from '@testing-library/react';
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
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Organizations')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });
});
