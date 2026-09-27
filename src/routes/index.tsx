import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Digital Museum" },
      {
        name: "description",
        content:
          "The Museum of Visual Stories — where every image holds a story.",
      },
    ],
  }),
  component: Index,
});

// The museum itself is a plain HTML/CSS/JS site served from public/museum/.
// This route simply opens it.
function Index() {
  useEffect(() => {
    window.location.replace("/museum/index.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8 text-center text-muted-foreground">
      Opening the museum…
    </div>
  );
}
