import useSWR from 'swr';
import { getBlogDetail } from './microcms';

export const BlogPreview = () => {
  const params = new URLSearchParams(window.location.search);
  const contentId = params.get('blogId');
  const draftKey = params.get('draftKey');

  const { data, error, isLoading, isValidating } = useSWR(
    contentId === null || draftKey === null
      ? null
      : ['/preview', contentId, draftKey],
    ([, contentId, draftKey]) => getBlogDetail(contentId, { draftKey }),
  );

  if (error) return <div class="text-blue-500">エラーが発生しました</div>;

  if (isLoading) return <div class="text-red-400">読み込み中...</div>;

  return (
    <div class="text-white">
      <h1>{data?.title}</h1>
      <p>{data?.publishedAt ?? data?.createdAt}</p>
      <div dangerouslySetInnerHTML={{ __html: data?.content ?? '' }} />
      {isValidating && <div>更新中...</div>}
    </div>
  );
};

export default BlogPreview;
