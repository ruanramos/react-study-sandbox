import React from "react";
import { render } from "@testing-library/react";

const expected = true;
const actual = false;

test(expect(actual).toBe(expected));
