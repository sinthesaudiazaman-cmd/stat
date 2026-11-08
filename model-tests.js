/**
 * STAT 2251: Inferential Statistics for Development Studies
 * Model Practice Examinations & Scoring Keys
 */

window.MODEL_TESTS = [
  {
    id: "midterm",
    title: "Mid-Term Examination Model Test (Section A Focus)",
    timeAllowed: "1.5 Hours",
    totalMarks: 50,
    scope: "Chapters 1 to 4 (Probability, Random Variables, Sampling, Regression & Correlation)",
    instructions: "Answer ALL questions in Group A (Short Answer). Answer any TWO questions from Group B, and any ONE question from Group C.",
    sections: [
      {
        group: "Group A: Compulsory Conceptual Questions (5 × 2 = 10 Marks)",
        questions: [
          {
            qId: "m-q1",
            marks: 2,
            text: "Define a random experiment and sample space with an example from Development Studies.",
            solution: "A random experiment is a process whose set of possible outcomes is known, but the specific outcome cannot be predicted with certainty. Sample space S is the set of all possible outcomes. Example: Randomly testing water wells in an upazila for arsenic contamination: S = {Safe, Unsafe}."
          },
          {
            qId: "m-q2",
            marks: 2,
            text: "Explain why two events with positive probabilities cannot be simultaneously mutually exclusive and independent.",
            solution: "If A and B are independent with P(A)>0 and P(B)>0, then P(A ∩ B) = P(A)P(B) > 0. However, mutually exclusive events require P(A ∩ B) = 0. Since a quantity cannot be simultaneously strictly greater than zero and equal to zero, both conditions cannot hold at once."
          },
          {
            qId: "m-q3",
            marks: 2,
            text: "Distinguish between Probability Mass Function (PMF) and Probability Density Function (PDF).",
            solution: "A PMF f(x) = P(X=x) assigns probabilities to individual discrete values such that ∑f(x) = 1. A PDF f(x) describes the curve height for a continuous variable where probability exists only across intervals ∫ f(x)dx = 1, and P(X=c) = 0 for any single exact point."
          },
          {
            qId: "m-q4",
            marks: 2,
            text: "Why is the sample mean x̄ called an unbiased estimator of population mean μ?",
            solution: "Because the expected value (long-run average) of all possible sample means across all possible samples of size n drawn from the population equals the true population parameter: E(x̄) = μ."
          },
          {
            qId: "m-q5",
            marks: 2,
            text: "Explain the classic statistical warning: 'Correlation does not imply Causation'.",
            solution: "Correlation indicates two variables co-vary linearly, but does not prove one causes the other. Both may be driven by a confounding third variable (e.g., ice cream sales and drowning both increase during hot summer weather due to temperature, not because ice cream causes drowning)."
          }
        ]
      },
      {
        group: "Group B: Intermediate Problems (Answer any 2 out of 3 — 2 × 5 = 10 Marks)",
        questions: [
          {
            qId: "m-q6",
            marks: 5,
            text: "Prove mathematically that Var(X) = E(X²) - [E(X)]².",
            solution: "Var(X) = E[(X - μ)²] = E[X² - 2μX + μ²] = E(X²) - 2μE(X) + μ² = E(X²) - 2μ² + μ² = E(X²) - μ². Since μ = E(X), Var(X) = E(X²) - [E(X)]²."
          },
          {
            qId: "m-q7",
            marks: 5,
            text: "State the Central Limit Theorem. If a population has μ = 80 and σ = 16, find the mean and standard error of the sample mean for n = 64.",
            solution: "CLT: Regardless of the population shape, the sampling distribution of the sample mean x̄ is approximately Normal N(μ, σ²/n) for n ≥ 30. Mean of x̄ = μ = 80. Standard Error SE(x̄) = σ / √n = 16 / √64 = 16 / 8 = 2.0."
          },
          {
            qId: "m-q8",
            marks: 5,
            text: "In a sample of 27 firms, the correlation between R&D expenditure and profit growth is r = 0.40. Test at α = 0.05 whether the population correlation is significantly different from zero (Given t_0.025, 25 = 2.060).",
            solution: "H0: ρ = 0 vs H1: ρ ≠ 0. df = n - 2 = 25. Test statistic: t = [ r * √(n-2) ] / √(1 - r²) = [ 0.40 * 5 ] / √(1 - 0.16) = 2.00 / √0.84 = 2.00 / 0.9165 = 2.18. Since |t_calc| = 2.18 > 2.060, reject H0. There is a statistically significant positive correlation."
          }
        ]
      },
      {
        group: "Group C: Comprehensive Analytical Problem (Answer 1 — 1 × 15 = 15 Marks + 15 Optional/Choice)",
        questions: [
          {
            qId: "m-q9",
            marks: 15,
            text: "A micro-development program records vocational training hours (X) and monthly income (Y, in thousand BDT) for 6 rural youths: (2, 10), (4, 14), (6, 18), (8, 22), (10, 26), (12, 30). (a) Compute Pearson's r, (b) Fit the OLS regression line Y = a + bX, (c) Predict income for 9 hours of training, (d) Interpret slope b and intercept a.",
            solution: `
              (a) Calculations:
              ∑X = 42, X̄ = 7; ∑Y = 120, Ȳ = 20.
              ∑(X - X̄)² = 25 + 9 + 1 + 1 + 9 + 25 = 70.
              ∑(Y - Ȳ)² = 100 + 36 + 4 + 4 + 36 + 100 = 280.
              ∑(X - X̄)(Y - Ȳ) = (-5)(-10) + (-3)(-6) + (-1)(-2) + (1)(2) + (3)(6) + (5)(10) = 50 + 18 + 2 + 2 + 18 + 50 = 140.
              r = 140 / √(70 * 280) = 140 / √19600 = 140 / 140 = 1.0 (Perfect positive correlation).
              (b) b = 140 / 70 = 2.0. a = Ȳ - bX̄ = 20 - 2(7) = 6.0.
              Fitted line: Ŷ = 6.0 + 2.0X.
              (c) For X = 9 hours: Ŷ = 6.0 + 2.0(9) = 24.0 (24,000 BDT).
              (d) Slope b = 2.0 means each additional hour of training increases predicted monthly earnings by 2,000 BDT. Intercept a = 6.0 represents baseline predicted monthly earnings (6,000 BDT) for an untrained youth (X = 0).
            `
          }
        ]
      }
    ]
  },

  {
    id: "final",
    title: "Final Examination Comprehensive Model Test (Section A & B)",
    timeAllowed: "3.0 Hours",
    totalMarks: 100,
    scope: "Complete Syllabus (Chapters 1 to 10)",
    instructions: "Section A (Chapters 1-4) carries 50 Marks. Section B (Chapters 5-10) carries 50 Marks. Follow department exam instructions for internal choices.",
    sections: [
      {
        group: "Section A: Foundational Probability & Modeling (50 Marks)",
        questions: [
          {
            qId: "f-q1",
            marks: 5,
            text: "Explain the four approaches to defining probability: Classical, Empirical, Axiomatic, and Personalistic with relevant examples.",
            solution: "1. Classical: Ratio of favorable to total equally likely outcomes (e.g. coin flip). 2. Empirical: Long-run relative frequency from past data (e.g. field goal percentage). 3. Axiomatic: Mathematical set-theoretic framework satisfying Kolmogorov's 3 axioms. 4. Personalistic: Subjective degree of belief based on experience (e.g. doctor estimating treatment success)."
          },
          {
            qId: "f-q2",
            marks: 10,
            text: "The number of child health checkups per day at a community clinic follows a Poisson distribution with mean λ = 3. Find the probability of: (a) Exactly 2 checkups, (b) Zero checkups, (c) At least 1 checkup. [Given e^-3 ≈ 0.0498].",
            solution: `
              (a) P(X = 2) = (3² * e^-3) / 2! = (9 * 0.0498) / 2 = 0.4482 / 2 = 0.2241 (22.41%).
              (b) P(X = 0) = (3^0 * e^-3) / 0! = 1 * 0.0498 / 1 = 0.0498 (4.98%).
              (c) P(X ≥ 1) = 1 - P(X = 0) = 1 - 0.0498 = 0.9502 (95.02%).
            `
          },
          {
            qId: "f-q3",
            marks: 15,
            text: "Compare and contrast Sample Survey vs Complete Census across: coverage, cost, sampling error, non-sampling error, and speed. Discuss why sampling is indispensable in development economics.",
            solution: "Sample survey studies a subset; census studies all units. Survey has low cost and fast completion; census requires massive national budget and years. Survey has sampling error; census has 0 sampling error. However, census suffers from massive non-sampling errors (enumerator bias, missing data). In development economics, sampling is indispensable due to budget constraints, urgent policy decision timelines, and destructive testing."
          },
          {
            qId: "f-q4",
            marks: 20,
            text: "A study on household income (X) and consumption (Y) yields: n = 10, ∑X = 150, ∑Y = 120, ∑X² = 2400, ∑Y² = 1600, ∑XY = 1900. (a) Calculate Pearson's r, (b) Estimate the regression of Y on X, (c) Compute R².",
            solution: `
              (a) S_XX = 2400 - (150)²/10 = 2400 - 2250 = 150.
              S_YY = 1600 - (120)²/10 = 1600 - 1440 = 160.
              S_XY = 1900 - (150*120)/10 = 1900 - 1800 = 100.
              r = 100 / √(150 * 160) = 100 / √24000 = 100 / 154.92 ≈ 0.6455.
              (b) b = S_XY / S_XX = 100 / 150 = 0.6667.
              Ȳ = 120/10 = 12; X̄ = 150/10 = 15.
              a = Ȳ - bX̄ = 12 - (0.6667 * 15) = 12 - 10 = 2.0.
              Fitted Line: Ŷ = 2.0 + 0.667X.
              (c) R² = (0.6455)² = 0.4167 (41.67% of consumption variation is explained by income).
            `
          }
        ]
      },
      {
        group: "Section B: Inferential Testing & Applied Macro Statistics (50 Marks)",
        questions: [
          {
            qId: "f-q5",
            marks: 5,
            text: "Define Type I and Type II errors. Use the judicial courtroom verdict analogy to illustrate their practical consequences.",
            solution: "Type I error (α) is rejecting H0 when H0 is true (convicting an innocent person). Type II error (β) is failing to reject H0 when H0 is false (acquitting a guilty person). In judicial policy, convicting the innocent is viewed as worse, so we fix α at low levels (0.05 or 0.01)."
          },
          {
            qId: "f-q6",
            marks: 10,
            text: "Explain the four criteria of a good estimator: Unbiasedness, Consistency, Efficiency, and Sufficiency.",
            solution: "1. Unbiasedness: E(θ̂) = θ. 2. Consistency: Estimator converges in probability to parameter as n -> ∞ (Var(θ̂) -> 0). 3. Efficiency: Has minimum variance among all unbiased estimators (attains Cramér-Rao lower bound). 4. Sufficiency: Uses all sample information regarding the parameter (Neyman-Fisher factorization)."
          },
          {
            qId: "f-q7",
            marks: 15,
            text: "A public health study evaluates whether infant malnutrition rates differ across 3 rural divisions. Observed counts: Division A: 30 malnourished, 70 healthy (Total=100); Division B: 45 malnourished, 55 healthy (Total=100); Division C: 25 malnourished, 75 healthy (Total=100). Test at α = 0.05 whether malnutrition is independent of division (Given χ²_0.05, 2 = 5.991).",
            solution: `
              H0: Malnutrition is independent of Division. H1: Malnutrition is dependent on Division.
              Grand Total N = 300. Total Malnourished = 30 + 45 + 25 = 100. Total Healthy = 70 + 55 + 75 = 200.
              Expected Frequencies:
              For each division (row total = 100):
              E_malnourished = (100 * 100) / 300 = 33.33.
              E_healthy = (100 * 200) / 300 = 66.67.
              Chi-Square Calculation:
              Div A: (30 - 33.33)² / 33.33 + (70 - 66.67)² / 66.67 = 11.09/33.33 + 11.09/66.67 = 0.333 + 0.166 = 0.499.
              Div B: (45 - 33.33)² / 33.33 + (55 - 66.67)² / 66.67 = 136.19/33.33 + 136.19/66.67 = 4.086 + 2.043 = 6.129.
              Div C: (25 - 33.33)² / 33.33 + (75 - 66.67)² / 66.67 = 69.39/33.33 + 69.39/66.67 = 2.082 + 1.041 = 3.123.
              χ²_calc = 0.499 + 6.129 + 3.123 = 9.751.
              df = (3 - 1)(2 - 1) = 2.
              Since χ²_calc = 9.751 > 5.991, reject H0. Malnutrition rates differ significantly across divisions.
            `
          },
          {
            qId: "f-q8",
            marks: 20,
            text: "An agro-development agency tests 3 varieties of high-yielding rice across 4 experimental plots each (N = 12). Yields (kg/plot): Variety 1: [20, 22, 24, 26]; Variety 2: [28, 30, 32, 34]; Variety 3: [24, 26, 28, 30]. (a) Construct the complete ANOVA table, (b) Test equality of variety means at α = 0.05. (Given F_0.05, 2, 9 = 4.26).",
            solution: `
              (a) Means:
              Variety 1: T1 = 92, Mean1 = 23.
              Variety 2: T2 = 124, Mean2 = 31.
              Variety 3: T3 = 108, Mean3 = 27.
              Grand Total T = 92 + 124 + 108 = 324. Grand Mean = 324 / 12 = 27.0.
              Correction Factor CF = (324)² / 12 = 104976 / 12 = 8748.
              ∑∑ x_ij² = (400+484+576+676) + (784+900+1024+1156) + (576+676+784+900) = 2136 + 3864 + 2936 = 8936.
              SST = 8936 - 8748 = 188. (df = 12 - 1 = 11).
              SSB = [ (92)²/4 + (124)²/4 + (108)²/4 ] - 8748 = [ 8464/4 + 15376/4 + 11664/4 ] - 8748 = [ 2116 + 3844 + 2916 ] - 8748 = 8876 - 8748 = 128. (df = 3 - 1 = 2).
              SSW = SST - SSB = 188 - 128 = 60. (df = 12 - 3 = 9).
              MSB = 128 / 2 = 64.0.
              MSW = 60 / 9 ≈ 6.67.
              F = MSB / MSW = 64.0 / 6.67 = 9.60.
              Table:
              Between Varieties: SS = 128, df = 2, MS = 64.0, F = 9.60.
              Within (Error): SS = 60, df = 9, MS = 6.67.
              Total: SS = 188, df = 11.
              (b) Critical F_0.05, 2, 9 = 4.26. Since F_calc = 9.60 > 4.26, reject H0. Rice yields differ significantly among the three varieties.
            `
          }
        ]
      }
    ]
  }
];
