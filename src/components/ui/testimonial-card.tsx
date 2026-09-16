import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const Card = href ? 'a' : 'div';

  return (
    <Card
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'flex flex-col rounded-none',
        'border border-[#C9A84C]/25',
        'bg-white',
        'p-5 sm:p-6 text-start',
        'hover:border-[#C9A84C]/60 hover:shadow-sm',
        'max-w-[300px] sm:max-w-[320px]',
        'transition-all duration-300',
        href && 'cursor-pointer',
        className,
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-10 w-10 rounded-full overflow-hidden">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-gray-900 leading-none">{author.name}</h3>
          <p className="text-[11px] text-[#C9A84C] mt-0.5">{author.handle}</p>
        </div>
      </div>
      <div className="w-6 h-px bg-[#C9A84C]/40 mb-3" />
      <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
    </Card>
  );
}
