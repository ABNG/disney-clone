"use client";

import useSWRImmutable from "swr";
import { movieSuggestion } from "@/data/api/open_ai_suggestion_api";
type Props = {
  term: string;
};
const fetcher = (term: string) => movieSuggestion(term);
const AISuggestions = ({ term }: Props) => {
  const { data, error, isLoading } = useSWRImmutable(
    `ai-suggestion-${term}`,
    () => fetcher(term),
    {
      dedupingInterval: 10000000,
    }
  );

  const generateText = () => {
    if (isLoading) {
      return (
        <>
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white" />
          <p className="text-sm text-gray-400">Ai Assistant is thinking...</p>
        </>
      );
    }

    if (error) {
      return <div>Error fetching data: {error.message}</div>;
    }
    if (!data) {
      return <div>No data</div>;
    }

    return (
      <>
        <div className="animate-pulse rounded-full bg-gradient-to-t from-white h-10 w-10 border-2 flex-shrink-0 border-white" />
        <div>
          <p className="text-sm text-gray-400">AI Assistant suggestions: </p>
          <p className="italic text-xl">{data.body}</p>
        </div>
      </>
    );
  };

  return (
    <div className="flex space-x-5 items-center px-10">{generateText()}</div>
  );
};

export default AISuggestions;
