import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />); //mount = FullDOM
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text are and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a textarea where users can type in", () => {
  wrapped
    .find("textarea")
    .simulate("change", { target: { value: "new comment" } });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

it("empties the value of the textarea after submit", () => {
  wrapped
    .find("textarea")
    .simulate("change", { target: { value: "new comment" } });
  wrapped.update();
  wrapped.find("form").simulate("submit");
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
