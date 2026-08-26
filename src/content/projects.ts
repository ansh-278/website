import type { ProjectEntry } from "@/types/content";

export const projectEntries: ProjectEntry[] = [
  {
    id: "projectile-motion",
    title: "Projectile Motion Simulator With Air Resistance",
    category: "Computation",
    description:
      "A numerical simulation of projectile motion, comparing idealized trajectories against ones with quadratic air resistance.",
    technologies: ["Python", "NumPy", "Matplotlib"],
    status: "complete",
    date: "2026-08-16",
    problem:
      "How a projectile's trajectory under gravity alone compares to one under gravity plus quadratic air resistance — and whether a step-by-step numerical simulation actually agrees with the known closed-form analytical solution for the no-drag case.",
    approach:
      "Time-step the motion forward numerically in small increments (dt), updating velocity and position at each step, rather than solving the equations of motion in closed form. For the no-drag case, the result is checked directly against the analytical projectile-motion equation. For the drag case, the drag force (proportional to velocity squared) is recomputed at every step since it changes continuously as the projectile slows down.",
    implementation:
      "Two scripts. `projectile.py` simulates ideal projectile motion with a basic Euler integration loop, then linearly interpolates the exact landing point (the moment height crosses zero) rather than just stopping at the first negative value — and overlays the analytical trajectory on the same plot for comparison. `drag.py` extends this to quadratic air resistance: at each time step it computes the drag force from the current speed (F = 0.5·k·ρ·v²·A), derives the resulting acceleration, and updates velocity before position, using NumPy for the vector math.",
    codeSnippets: [
      {
        language: "python",
        caption: "Interpolating the exact landing point in projectile.py, rather than stopping at the first negative height",
        code: `if y < 0:
    # interpolate to find the point where y = 0
    frac = prev_y / (prev_y - y)
    t = prev_t + frac * dt
    x = prev_x + frac * (x - prev_x)
    y = 0.0`,
      },
      {
        language: "python",
        caption: "Recomputing drag-based acceleration each step in drag.py",
        code: `v = np.sqrt(vx**2 + vy**2)
ax = -(0.5 * area * rho * k * v * vx) / mass
ay = -(g + (0.5 * area * rho * k * v * vy) / mass)`,
      },
    ],
    result:
      "Plots the trajectory for a given initial velocity and launch angle; for the no-drag case, the numerically simulated path is overlaid on the analytical curve to visually confirm they match.",
    github: "https://github.com/ansh-278/projectile-motion",
    demo: undefined,
    figures: [],
  },
  {
    id: "oscillating-pendulum",
    title: "Oscillating Pendulum: Simple, Small-Angle, and Double Pendulum",
    category: "Computation",
    description:
      "Numerical simulations of pendulum motion, in three stages — the exact simple pendulum, the small-angle approximation, and the chaotic double pendulum.",
    technologies: ["Python", "NumPy", "Matplotlib"],
    status: "complete",
    date: "2026-08-17",
    problem:
      "How a pendulum's motion changes as the model gets more complex — from the exact simple-pendulum equation, to the small-angle approximation usually introduced first, to the fully chaotic double pendulum.",
    approach:
      "The same numerical time-stepping approach throughout: update angular acceleration, then angular velocity, then angle, at each small time step. For the double pendulum specifically, the equations of motion were worked out by hand first — writing each bob's x/y position in terms of θ₁ and θ₂, computing kinetic and potential energy, and solving the Euler–Lagrange equations for angular acceleration — before being implemented numerically.",
    implementation:
      "Three scripts. `sp.py` simulates the simple pendulum with the exact nonlinear equation (α = -(g/l)·sin θ), valid at any release angle. `small_variation.py` swaps in the small-angle approximation (α = -(g/l)·θ) instead, restricted to roughly 1–14° where that approximation holds, and plots angle and angular velocity side by side. `dp.py` simulates the double pendulum from the Euler–Lagrange-derived equations for θ₁ and θ₂, then animates the result. The physics behind the double pendulum was derived by hand; the Matplotlib animation code itself was written with AI assistance after that derivation, which is noted here rather than left unstated.",
    codeSnippets: [
      {
        language: "python",
        caption: "sp.py — the exact equation, valid at any angle",
        code: `alpha = -((g / l) * np.sin(theta))
omega = omega + alpha * dt
theta += omega * dt`,
      },
      {
        language: "python",
        caption: "small_variation.py — the same loop, with the small-angle approximation instead of sin θ",
        code: `alpha = -((g / l) * theta)
omega += alpha * dt
theta += omega * dt`,
      },
      {
        language: "python",
        caption: "dp.py — angular accelerations from the Euler–Lagrange equations of motion",
        code: `def acceleration(theta1, theta2, omega1, omega2):
    d = theta1 - theta2

    a1 = (
        -g * (2*m1 + m2) * np.sin(theta1)
        - m2 * g * np.sin(theta1 - 2*theta2)
        - 2*m2 * np.sin(d) *
        (omega2**2 * L2 + omega1**2 * L1 * np.cos(d))
    ) / (
        L1 * (2*m1 + m2 - m2*np.cos(2*d))
    )

    a2 = (
        2*np.sin(d) *
        (
            omega1**2 * L1 * (m1 + m2)
            + g * (m1 + m2) * np.cos(theta1)
            + omega2**2 * L2 * m2 * np.cos(d)
        )
    ) / (
        L2 * (2*m1 + m2 - m2*np.cos(2*d))
    )

    return a1, a2`,
      },
    ],
    result:
      "The simple and small-angle scripts each plot angle (and, for the small-angle case, angular velocity) against time. The double pendulum script produces a live animation of both arms swinging from the derived equations of motion.",
    github: "https://github.com/ansh-278/oscillating_pendulum",
    demo: undefined,
    figures: [],
  },
];
