import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { base44 } from "@/api/base44Client";

const CATEGORY_COLORS = {
  Tips: "bg-blue-500/10 text-blue-600",
  Maintenance: "bg-green-500/10 text-green-600",
  Emergency: "bg-red-500/10 text-red-600",
  Installation: "bg-purple-500/10 text-purple-600",
  News: "bg-amber-500/10 text-amber-600",
};

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await base44.entities.BlogPost.list("-created_date", 50);
        setPosts(data);
      } catch (e) {
        setPosts([]);
      }
      document.title = "Plumbing Insights | FlowFix";
      setLoading(false);
    };
    loadPosts();
  }, []);

  return (
    <div>
      {/* Article Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4 py-12"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            >
              {selected.cover_image && (
                <div className="aspect-video w-full">
                  <img src={selected.cover_image} alt={selected.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {selected.category && (
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${CATEGORY_COLORS[selected.category] || "bg-muted text-muted-foreground"}`}>
                        {selected.category}
                      </span>
                    )}
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {moment(selected.created_date).format("MMMM D, YYYY")}
                    </span>
                  </div>
                  <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <h1 className="font-heading font-bold text-2xl lg:text-3xl text-obsidian mb-6">{selected.title}</h1>
                <div className="prose prose-slate max-w-none prose-headings:font-heading prose-a:text-cerulean">
                  <ReactMarkdown>{selected.content}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="bg-obsidian py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-cerulean font-heading font-medium text-sm uppercase tracking-wider">Knowledge Base</span>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mt-3 mb-4">Plumbing Insights</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Expert tips, guides, and news to help you maintain your home plumbing system.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-4 border-muted border-t-cerulean rounded-full animate-spin" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">No posts yet. Check back soon.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelected(post)}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-cerulean/30 hover:shadow-lg hover:shadow-cerulean/5 transition-all cursor-pointer"
                >
                  {post.cover_image && (
                    <div className="aspect-video w-full overflow-hidden">
                      <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {post.category && (
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] || "bg-muted text-muted-foreground"}`}>
                          {post.category}
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {moment(post.created_date).format("MMM D, YYYY")}
                      </span>
                    </div>
                    <h2 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-cerulean transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-cerulean text-sm font-medium group-hover:gap-2 transition-all">
                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {Math.max(1, Math.ceil((post.content || "").split(" ").length / 200))} min read
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
