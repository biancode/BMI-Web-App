BMI Web App — Plan

1) Goal & Scope

A small, modular web app for recording body data (weight & height), calculating BMI, tracking goals and visualising progress.

Out of scope v1: User management/accounts, synchronisation across devices, medical advice.

2) Core functions

Form (input)
    Fields: Date (default today), weight (kg), height (cm) [optional fixed per user], note (optional).

    BMI calculated and displayed directly

    Validation: mandatory fields, range check (e.g. 30–300 kg, 120–230 cm), number format, empty notes allowed

    UX: immediate feedback, error messages, keyboard/enter submit, loader/disable during save

Goals (table view)

    Create a target weight with a deadline

    Status/progress (weight, days remaining, traffic light indicator)

    CRUD: Create/change/delete goal, each with confirmation

Graphs (curves)

    Line graph of weight over time; optional second axis with BMI curve.

    Aggregations: last 7/30/90 days; average, min/max, trend line.


Dashboard

    Tiles: current weight, current BMI + category (underweight/normal/overweight/obese), change after 7 days

------------------------------ ---------------------------------------------------------------------------------------------------- -----------

Plan.md — Table feature for BMI app
Goal

A clear table should show the user their previous BMI calculations.
Each row represents one measurement, in