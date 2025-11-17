"use client";
import React, { useState } from "react";
import Image from "next/image";

import * as Dialog from "@radix-ui/react-dialog";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiThreedotjs,
  SiRedux,
  SiTailwindcss,
  SiPrisma,
  SiGraphql,
} from "react-icons/si";

type TechItem = {
  id: number;
  title: string;
  progress: number; // percentage to visualize progress
  icon: IconType;
  color: string; // brand color
  bg: string; // subtle background tint
  summary: string;
  bullets: string[];
};

const techItems: TechItem[] = [
  { id: 1, title: "Next.js", progress: 95, icon: SiNextdotjs, color: "#000000", bg: "rgba(0,0,0,0.08)", summary: "Production SSR/SSG sites with optimized routing and image handling.", bullets: ["Enterprise marketing sites with SSR and dynamic routes", "API Routes for lightweight server logic", "Edge-ready with fast TTFB and strong Lighthouse"] },
  { id: 2, title: "React", progress: 95, icon: SiReact, color: "#61DAFB", bg: "rgba(97,218,251,0.12)", summary: "Reusable component systems and modern hooks across features.", bullets: ["Composable UI libraries for multiple clients", "Memoization & suspense patterns for performance", "Clean prop contracts and story-driven development"] },
  { id: 3, title: "TypeScript", progress: 90, icon: SiTypescript, color: "#3178C6", bg: "rgba(49,120,198,0.12)", summary: "Strict typing for safety and maintainability.", bullets: ["Typed domain models and API clients", "Utility types for safer refactors", "Zero any policy in shared libraries"] },
  { id: 4, title: "Sass", progress: 85, icon: SiSass, color: "#CC6699", bg: "rgba(204,102,153,0.12)", summary: "Layered SCSS architecture with utilities.", bullets: ["Responsive mixins and tokens", "Component-scoped styles with variables", "Theme-friendly structure"] },
  { id: 5, title: "Node.js", progress: 80, icon: SiNodedotjs, color: "#5FA04E", bg: "rgba(95,160,78,0.12)", summary: "APIs and integration tooling.", bullets: ["REST/JSON APIs powering internal dashboards", "Background jobs and schedulers", "Streaming/queues for heavy tasks"] },
  { id: 6, title: "Express", progress: 75, icon: SiExpress, color: "#303030", bg: "rgba(48,48,48,0.12)", summary: "Minimal APIs and webhooks.", bullets: ["Webhook receivers for payment/CRM", "Validation & security middleware", "Smart caching and rate limiting"] },
  { id: 7, title: "MongoDB", progress: 70, icon: SiMongodb, color: "#47A248", bg: "rgba(71,162,72,0.12)", summary: "Flexible document stores for rapid builds.", bullets: ["Prototyping analytics collections", "Indexes for critical reads", "Aggregation pipelines"] },
  { id: 8, title: "PostgreSQL", progress: 80, icon: SiPostgresql, color: "#336791", bg: "rgba(51,103,145,0.12)", summary: "Relational schema and queries.", bullets: ["Normalized schema for transactional apps", "Indices, views, and materialized views", "Migration discipline across environments"] },
  { id: 9, title: "Docker", progress: 65, icon: SiDocker, color: "#2496ED", bg: "rgba(36,150,237,0.12)", summary: "Containerized dev, preview, and CI.", bullets: ["Dev containers for parity", "Compose setups for local stacks", "Repeatable environments"] },
  { id: 10, title: "GitHub", progress: 90, icon: SiGithub, color: "#181717", bg: "rgba(24,23,23,0.12)", summary: "Automation with Actions and PR hygiene.", bullets: ["CI with tests and linting", "Preview deployments per PR", "Conventional commits and release notes"] },
  { id: 11, title: "Redux", progress: 70, icon: SiRedux, color: "#764ABC", bg: "rgba(118,74,188,0.12)", summary: "Global state only when warranted.", bullets: ["Toolkit slices and selectors", "Predictable updates in complex views", "Persistence and hydration"] },
  { id: 12, title: "Tailwind", progress: 65, icon: SiTailwindcss, color: "#06B6D4", bg: "rgba(6,182,212,0.12)", summary: "Utility-first for speed and consistency.", bullets: ["Rapid prototypes and design tokens", "Consistent spacing and color scale", "Dark mode support"] },
  { id: 13, title: "Prisma", progress: 75, icon: SiPrisma, color: "#2D3748", bg: "rgba(45,55,72,0.12)", summary: "Typed DB access in Node services.", bullets: ["Migrations with safety nets", "Typed client for queries", "Batching and transactions"] },
  { id: 14, title: "GraphQL", progress: 60, icon: SiGraphql, color: "#E10098", bg: "rgba(225,0,152,0.12)", summary: "Schema-first APIs and caching.", bullets: ["Schema + resolvers with codegen", "Fragment-driven UI", "Client caching in data-heavy views"] },
  { id: 15, title: "Three.js", progress: 60, icon: SiThreedotjs, color: "#f59e0b", bg: "rgba(245,158,11,0.12)", summary: "3D graphics and animations.", bullets: ["WebGL-powered experiences", "GLTF/OBJ models", "Physics simulations"] },
];

export default function VideoThree() {
  const [active, setActive] = useState<TechItem | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="tp-video-3-area">
      {/* hero video */}
      <div className="tp-video-3-wrap p-relative" style={{ backgroundColor: '#000', minHeight: 600 }}>
        <video
          data-speed=".7"
          className="play-video"
          loop
          muted
          autoPlay
          playsInline
          controls
          preload="metadata"
          poster="/mascot/srkmascot.webp"
          onError={(e) => {
            setVideoError(true);
            if (process.env.NODE_ENV !== 'production') {
              console.error('Video failed to load:', e);
            }
          }}
          onLoadedData={(e) => {
            if (process.env.NODE_ENV !== 'production') {
              const v = e.currentTarget;
              console.log('Video readyState:', v.readyState, 'dimensions:', v.videoWidth, 'x', v.videoHeight);
            }
            setVideoLoaded(true);
          }}
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source src="/video/dn-video.mp4" type="video/mp4" />
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>
        {videoError && !videoLoaded && (
          <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{background:'rgba(0,0,0,0.6)', color:'#fff', padding:'16px 20px', borderRadius:8, textAlign:'center'}}>
              <p style={{marginBottom:10}}>Unable to load embedded video due to remote restrictions.</p>
              <a href="https://www.digitallynext.com/home/dn-video.mp4" target="_blank" rel="noopener noreferrer" className="tp-btn-black" style={{display:'inline-block', padding:'8px 12px'}}>
                Open video in new tab
              </a>
            </div>
          </div>
        )}
      </div>

      {/* logos grid with progress */}
      <div className="container container-1200" style={{ paddingTop: 80, paddingBottom: 60, }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "5px" }}>
          <div className="col-xl-8">
            <h3 className="tp-section-title-90 tp_text_invert tp_fade_bottom" style={{ marginBottom: 10}}>
              Our Progress & Tech Stack
            </h3>
            <p className="tp_text_invert" style={{ maxWidth: 700 }}>
              Tap any logo to see a quick summary of experience and highlights.
            </p>
          </div>
          <Image
            src="/mascot/srkmascot.webp"
            width={180}
            height={100}
            alt="port-img"
            style={{ height: "auto" }}
          />
        </div>
        <div
          className="row"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {techItems.map(item => (
            <div
              key={item.id}
              style={{
                width: "20%", // 5 per row
                marginBottom: "30px"
              }}
            >
              <button
                className="dn-tech-card"
                style={{ width: "100%" }}
                type="button"
                onClick={() => setActive(item)}
                aria-expanded={active?.id === item.id}
                aria-label={`Open ${item.title} details`}
              >
                <div className="dn-tech-card-inner">
                  <div
                    className="dn-tech-icon"
                    style={{
                      color: item.color,
                      background: item.bg
                    }}
                  >
                    {React.createElement(item.icon, { size: 36, color: item.color })}
                  </div>

                  <div className="dn-tech-title">{item.title}</div>
                </div>
              </button>
            </div>
          ))}
        </div>

      </div>
      <Dialog.Root open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="dn-dialog-overlay" />
          {active && (
            <Dialog.Content className="dn-dialog-content" aria-describedby={undefined}>
              <div className="dn-tech-modal">
                <div className="dn-tech-modal-header">
                  <div className="dn-tech-icon" aria-hidden="true" style={{ color: active.color, background: active.bg }}>
                    {React.createElement(active.icon, { size: 40, color: active.color })}
                  </div>
                  <h4 className="dn-tech-modal-title">{active.title}</h4>
                </div>
                <div className="dn-tech-modal-body">
                  <p className="dn-tech-modal-summary">{active.summary}</p>
                  {/* <h6 className="dn-tech-modal-subtitle">My Our</h6> */}
                  <ul className="dn-tech-modal-list">
                    {active.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Dialog.Close className="dn-dialog-close" aria-label="Close">×</Dialog.Close>
            </Dialog.Content>
          )}
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
