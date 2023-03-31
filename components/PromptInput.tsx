"use client";

import fetchSuggestionsFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import { useState } from "react";
import useSWR from "swr";

const PromptInput = () => {
  const [input, setInput] = useState("");

  const {
    data: suggestion,
    isLoading,
    mutate,
    isValidating,
  } = useSWR("/api/suggestions", fetchSuggestionsFromChatGPT, {
    revalidateOnFocus: false,
  });

  return (
    <div className="m-10">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 h-10 outline-none rounded-md"
          placeholder="Enter a prompt..."
        />
        <button type="submit" disabled={!input} className="border-t">
          Generate
        </button>
        <button
          className="p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
          type="button"
        >
          Use Suggestion
        </button>
        <button
          className="p-4 bg-white text-violet-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold"
          type="button"
        >
          New Suggestion
        </button>
      </form>

      {input && (
        <div className="italic pt-2 pl-2 font-light">
          <p className="text-gray-500">Suggestion</p>
          <p className="text-gray-800">{suggestion}</p>
        </div>
      )}
    </div>
  );
};
export default PromptInput;
