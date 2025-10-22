import { Component, Input, computed, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export interface Story {
  id: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  excerpt: string;
  imageUrl?: string;
  content: string;
}

const MOCK: Story[] = [
  {
    id: 's1',
    title: 'Alumni Kick-off: Our Journey Begins',
    author: 'Team Alumi',
    date: '2025-09-12T09:00:00.000Z',
    tags: ['2025'],
    excerpt:
      'Every great success story starts with a simple idea — and the courage to make it real.',
    imageUrl: '/images-stories/kickoff.png',
    content:
      'What began with three tech enthusiasts and a shared vision in a small workspace has grown into a trusted IT company. Through innovation, reliability, and passion, the team turned challenges into opportunities — proving that big ideas can start small.',
  },
  {
    id: 's2',
    title: 'Cyberattack stopped — in 11 minutes',
    author: 'Team Alumi',
    date: '2025-06-15T10:00:00.000Z',
    tags: ['2025'],
    excerpt: 'When every second counts, our security team proves what true resilience looks like.',
    imageUrl: '/images-stories/security.png',
    content:
      'A client became the target of a massive ransomware attack. Our security team detected the attack early, isolated 143 affected systems, and restored all services from backups — in under three hours.',
  },
  {
    id: 's3',
    title: 'Moved 50,000 employees to remote work in just 5 days',
    author: 'Team Alumi',
    date: '2024-09-20T10:30:00.000Z',
    tags: ['2024'],
    excerpt: 'When crisis strikes, true innovation rises.',
    imageUrl: '/images-stories/homeoffice.png',
    content:
      'When the pandemic hit, 50,000 employees of major corporation came to a standstill. Our IT company set up a secure remote work infrastructure within just 5 days - including VPN, collaboration tools, and device management.',
  },
  {
    id: 's4',
    title: 'Server farm with 90% less energy consumption',
    author: 'Team Alumi',
    date: '2024-03-10T09:00:00.000Z',
    tags: ['2024'],
    excerpt: 'Innovation meets sustainability — and efficiency reaches a new level.',
    imageUrl: '/images-stories/serverfarm.png',
    content:
      'For an international logistics company, a data center was fully virtualized. Through intelligent load balancing, liquid cooling, and cloud hybridization, energy consumption dropped by 90%, while performance increased by 40%.',
  },
  {
    id: 's5',
    title: 'AI system uncovers multimillion-dollar fraud — before the financial authorities do',
    author: 'Team Alumi',
    date: '2023-06-10T09:00:00.000Z',
    tags: ['2023'],
    excerpt: 'Sometimes, the smartest investigator isn’t human.',
    imageUrl: '/images-stories/aisystem.png',
    content:
      'A financial institution commissioned us to detect irregularities in transaction data. Our AI uncovered a previously undetected fraud pattern with a potential loss of €37 million — before the authorities did.',
  },
  {
    id: 's6',
    title: 'Product launch in 48 hours — thanks to DevOps magic',
    author: 'Team Alumi',
    date: '2023-03-05T08:00:00.000Z',
    tags: ['2023'],
    excerpt: 'Speed meets precision — when every hour counts.',
    imageUrl: '/images-stories/launch.png',
    content:
      'A client needed to launch a new product immediately due to a competitor’s move. Our team set up a complete DevOps pipeline within 48 hours — including automated testing, deployment, and monitoring.',
  },
  {
    id: 's7',
    title: 'Data recovery after major fire — 100% restored',
    author: 'Team Alumi',
    date: '2020-02-18T09:00:00.000Z',
    tags: ['2020'],
    excerpt: 'When disaster strikes, recovery becomes a mission.',
    imageUrl: '/images-stories/recovery.png',
    content:
      'After a fire in a server room, the damage seemed irreparable. Our incident response team reconstructed 12 TB of data from destroyed hard drives in just 6 days — completely.',
  },
  {
    id: 's8',
    title: 'Smart city project: 5 million sensors connected',
    author: 'Team Alumi',
    date: '2020-09-15T10:00:00.000Z',
    tags: ['2020'],
    excerpt: 'Where technology meets urban intelligence.',
    imageUrl: '/images-stories/smartcity.png',
    content:
      'For a European capital, we developed the IT architecture of a smart city. Five million IoT sensors — covering traffic, energy, and environment — were integrated into a single platform.',
  },
  {
    id: 's9',
    title: 'Achieved 0.002-second latency for stock trading',
    author: 'Team Alumi',
    date: '2019-01-10T10:30:00.000Z',
    tags: ['2019'],
    excerpt: 'When speed defines success, every microsecond matters.',
    imageUrl: '/images-stories/stock.png',
    content:
      'For a high-frequency trader, we built a customized infrastructure. Through GPU optimization, edge computing, and fiber tuning, we achieved a record latency of 0.002 seconds.',
  },
  {
    id: 's10',
    title: 'From startup to unicorn — powered by our platform',
    author: 'Team Alumi',
    date: '2019-06-20T09:00:00.000Z',
    tags: ['2019'],
    excerpt: 'Every big success starts with a bold idea — and the right technology behind it.',
    imageUrl: '/images-stories/unicorn.png',
    content:
      'A young fintech started with just three employees.We developed the complete cloud architecture, API structure, and security layer. Three years later, the company was valued at €1.4 billion — and still runs on our infrastructure today.',
  },
].sort((a, b) => +new Date(b.date) - +new Date(a.date));

@Component({
  selector: 'alumi-story-card',
  standalone: true,
  imports: [CommonModule],
  template: `<article class="card" (click)="onOpen?.(story)">
    <img
      *ngIf="story.imageUrl"
      class="media"
      [src]="story.imageUrl"
      [alt]="story.title"
      loading="lazy"
    />
    <div class="body">
      <div class="meta">
        <span>Team Alumi</span><span>•</span
        ><time [attr.datetime]="story.date">{{ story.date | date : 'dd.MM.yyyy' }}</time>
      </div>
      <h3 class="title">{{ story.title }}</h3>
      <p class="excerpt">{{ story.excerpt }}</p>
      <div class="tags">
        <span class="tag" *ngFor="let t of story.tags">{{ t }}</span>
      </div>
    </div>
  </article>`,
  styles: [
    `
      .card {
        display: grid;
        grid-template-rows: auto 1fr;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.16s, background 0.16s;
        color: #fff;
        min-height: 320px;
      }
      .card:hover {
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.14);
      }
      .media {
        width: 100%;
        height: 160px;
        object-fit: cover;
        display: block;
      }
      .body {
        padding: 14px;
      }
      .meta {
        opacity: 0.85;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .title {
        margin: 8px 0;
        font-size: 1.08rem;
        line-height: 1.35;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .excerpt {
        opacity: 0.9;
        margin: 0 0 10px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .tag {
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 999px;
        padding: 4px 10px;
        font-size: 0.75rem;
      }
    `,
  ],
})
export class StoryCardComponent {
  @Input({ required: true }) story!: Story;
  @Input() onOpen?: (s: Story) => void;
}

@Component({
  selector: 'alumi-story-filters',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="filters" *ngIf="allTags?.length">
    <button class="chip" [class.active]="a() == null" (click)="set(null)">Alle</button>
    <button class="chip" *ngFor="let t of allTags" [class.active]="a() == t" (click)="set(t)">
      {{ t }}
    </button>
  </div>`,
  styles: [
    `
      .filters {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        margin: 8px 0 18px;
      }
      .chip {
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: #fff;
        border-radius: 999px;
        padding: 8px 14px;
        cursor: pointer;
        transition: background 0.15s, transform 0.08s, border-color 0.15s;
      }
      .chip:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-1px);
      }
      .chip.active {
        background: rgba(255, 255, 255, 0.25);
        border-color: rgba(255, 255, 255, 0.6);
      }
    `,
  ],
})
export class StoryFiltersComponent {
  @Input() allTags: string[] = [];
  @Input() onTagChange?: (t: string | null) => void;
  a = signal<string | null>(null);
  set(tag: string | null) {
    this.a.set(tag);
    this.onTagChange?.(tag);
  }
  @Input() set selectedTag(v: string | null) {
    this.a.set(v);
  }
}

@Component({
  selector: 'alumi-stories-page',
  standalone: true,
  imports: [CommonModule, StoryCardComponent, StoryFiltersComponent],
  template: `<section class="wrapper">
    <div class="intro-card">
      <h1>From Vision to Impact.</h1>
      <p class="sub">
        Every great success starts with a story — ours began with a small team, bold ideas, and a
        vision to make technology more human.
      </p>
    </div>
    <alumi-story-filters
      [allTags]="tags()"
      [selectedTag]="tag()"
      [onTagChange]="onTag"
    ></alumi-story-filters>
    <div class="years">
      <section class="year-block" *ngFor="let g of grouped()">
        <h3 class="year-title">{{ g.year }}</h3>
        <div class="grid-2">
          <alumi-story-card
            *ngFor="let s of g.stories"
            [story]="s"
            [onOpen]="open"
          ></alumi-story-card>
        </div>
      </section>
      <p class="empty" *ngIf="!grouped().length">Keine Stories gefunden.</p>
    </div>
    <dialog #dlg (click)="backdrop($event)">
      <article *ngIf="sel() as st" class="dialog-body">
        <button class="close" (click)="dlg.close()">×</button>
        <h2>{{ st.title }}</h2>
        <p class="meta">Von {{ st.author }} · {{ st.date | date : 'dd.MM.yyyy' }}</p>
        <img *ngIf="st.imageUrl" [src]="st.imageUrl" [alt]="st.title" />
        <p class="content">{{ st.content }}</p>
      </article>
    </dialog>
  </section>`,
  styles: [
    `
      :host {
        color: #fff;
        display: block;
      }
      .wrapper {
        max-width: 1180px;
        margin: 0 auto;
        padding: 48px 16px;
      }
      .intro-card {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 16px;
        padding: 24px 28px;
        margin-bottom: 24px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      }
      .sub {
        opacity: 0.85;
        margin: 4px 0 0;
      }
      .empty {
        opacity: 0.8;
        padding: 24px 0;
      }
      .years {
        display: grid;
        gap: 22px;
      }
      .year-block {
        display: grid;
        gap: 12px;
      }
      .year-title {
        font-size: 1.1rem;
        font-weight: 600;
        opacity: 0.9;
        margin: 6px 4px;
        padding: 4px 10px;
        width: max-content;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.28);
      }
      .grid-2 {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
      }
      @media (max-width: 820px) {
        .grid-2 {
          grid-template-columns: 1fr;
        }
      }
      dialog {
        border: none;
        border-radius: 16px;
        padding: 0;
        max-width: min(760px, 92vw);
        background: rgba(255, 255, 255, 0.14);
        color: #fff;
        backdrop-filter: blur(14px);
        border: 1px solid rgba(255, 255, 255, 0.25);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      }
      dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
      }
      .dialog-body {
        padding: 18px 22px 24px;
      }
      .dialog-body img {
        width: 100%;
        height: auto;
        border-radius: 12px;
        margin: 12px 0;
      }
      .meta {
        opacity: 0.85;
      }
      .content {
        white-space: pre-wrap;
      }
      .close {
        position: sticky;
        top: 8px;
        float: right;
        border: none;
        background: transparent;
        font-size: 1.8rem;
        color: #fff;
        cursor: pointer;
      }
    `,
  ],
})
export class StoriesPageComponent {
  @ViewChild('dlg') dlg!: ElementRef<HTMLDialogElement>;
  all = signal<Story[]>(MOCK);
  tag = signal<string | null>(null);
  sel = signal<Story | null>(null);
  Y = [2025, 2024, 2023, 2020, 2019];
  tags = computed(() => Array.from(new Set(this.all().flatMap((s) => s.tags))).sort());
  y = (d: string) => new Date(d).getFullYear();
  ph = (year: number, n: 1 | 2): Story => ({
    id: `ph-${year}-${n}`,
    title: `Erfolgsgeschichte ${year}`,
    author: 'Team Alumi',
    date: `${year}-01-01T00:00:00.000Z`,
    tags: [String(year)],
    excerpt: 'Weitere Erfolgsgeschichte aus diesem Jahr – Case Study folgt.',
    content: 'Teaser für eine weitere Erfolgsstory.',
  });
  filtered = computed(() => {
    const t = this.tag();
    return this.all().filter((s) => t == null || s.tags.includes(t));
  });
  grouped = computed(
    () =>
      this.Y.map((year) => {
        const s = this.filtered()
          .filter((x) => this.y(x.date) === year)
          .slice(0, 2);
        if (s.length === 1) s.push(this.ph(year, 2));
        return s.length ? { year, stories: s } : null;
      }).filter(Boolean) as { year: number; stories: Story[] }[]
  );
  onTag = (t: string | null) => this.tag.set(t);
  open = (s: Story) => {
    this.sel.set(s);
    this.dlg?.nativeElement?.showModal();
  };
  backdrop(e: MouseEvent) {
    const d = e.currentTarget as HTMLDialogElement,
      r = d.getBoundingClientRect();
    const o =
      e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    if (o) d.close();
  }
}

export const STORIES_ROUTES: Routes = [
  { path: '', component: StoriesPageComponent, title: 'Stories | Alumi' },
];
export default STORIES_ROUTES;
