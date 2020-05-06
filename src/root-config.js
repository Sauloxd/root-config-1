/* eslint-disable  no-console */
import React, { Fragment } from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import styled, { createGlobalStyle } from "styled-components";

console.log("moment", moment()); // this works
console.log("React", React); // this works
console.log("SingleDatePicker", SingleDatePicker); // this works
console.log("Fragment", Fragment); // this also works

console.log("createGlobalStyle UNDEFINED?", createGlobalStyle); // this logs undefined, not working
console.log("createGlobalStyle WOKRING NORMALLY", styled.createGlobalStyle``); // this also works
