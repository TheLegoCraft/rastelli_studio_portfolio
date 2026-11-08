import { withBasePath } from '@/lib/basePath';

// Shared by the project pages and the Hobbies page.

// Accepts youtu.be, youtube.com/watch?v= and youtube.com/shorts/ links
function youtubeId(src) {
  return src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/))([\w-]{11})/)?.[1];
}

export function ProjectBrief({ paragraphs }) {
  return paragraphs.map((paragraph, idx) => (
    <p key={idx} className="body-main" style={{ marginBottom: '1.4rem' }}>
      {paragraph.href ? (
        <a
          href={paragraph.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          {paragraph.label}
        </a>
      ) : paragraph}
    </p>
  ));
}

export function ProjectPhotobooth({ rows, fallbackAlt }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {rows.map((row, rowIdx) => {
        const gridCols = row.map(col => col.span || '1fr').join(' ');

        return (
          <div
            key={rowIdx}
            style={{
              display: 'grid',
              gridTemplateColumns: gridCols,
              gap: '1.25rem',
              alignItems: 'stretch',
            }}
          >
            {row.map((item, colIdx) => {
              const { src } = item;
              const videoId = youtubeId(src);

              if (videoId) {
                return (
                  <iframe
                    key={colIdx}
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                    title={item.alt || fallbackAlt}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{
                      width: '100%',
                      aspectRatio: item.aspectRatio || '16/9',
                      display: 'block',
                      border: 'none',
                      borderRadius: '10px',
                      backgroundColor: '#000',
                    }}
                  />
                );
              }

              return (
                <div
                  key={colIdx}
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: item.bg || 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...(item.aspectRatio ? { aspectRatio: item.aspectRatio } : {}),
                  }}
                >
                  <img
                    src={withBasePath(src)}
                    alt={item.alt || fallbackAlt}
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: item.maxHeight || (row.length === 1 ? '750px' : undefined),
                      objectFit: item.objectFit || 'cover',
                      objectPosition: item.objectPosition || 'center',
                      display: 'block',
                      borderRadius: '6px',
                    }}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
