# Plug-in for sorting posts/pages by last_modified_at.
# Works together with the plug-in named the same.
# https://github.com/gjtorikian/jekyll-last-modified-at/issues/70

# frozen_string_literal: true

require 'fileutils'
require 'pathname'
require 'jekyll-last-modified-at'

module Recents
  # Generate change information for all markdown pages
  class Generator < Jekyll::Generator
    def generate(site)
      items = site.pages.select { |p| p.path.end_with? '.md' }
      items.each do |page|
        page.data['last_modified_at_str'] = Jekyll::LastModifiedAt::Determinator.new(site.source, page.path, '%FT%T%:z').to_s
      end
    end
  end
end