import { MessageCircle } from "lucide-react";

type Props = {
  phoneE164?: string; // e.g. 919597464680
  defaultText?: string;
};

export default function WhatsappFloat({
  phoneE164 = "919597464680",
  defaultText = "Hi Jai Furniture! I want a quote for a custom furniture order.",
}: Props) {
  const href = `https://wa.me/${phoneE164}?text=${encodeURIComponent(defaultText)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-semibold hidden sm:block">WhatsApp</span>
    </a>
  );
}
