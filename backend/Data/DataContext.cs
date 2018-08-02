using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<User> Users {get; set;}
        public DbSet<Meal> Meals {get; set;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            // many to many relationship between users and the likes
            // builder.Entity<Like>()
            //     .HasKey(k => new {k.LikerId, k.LikeeId});

            // builder.Entity<Like>()
            //     .HasOne(u => u.Likee)
            //     .WithMany(u => u.Liker)
            //     .HasForeignKey(u => u.LikerId)
            //     .OnDelete(DeleteBehavior.Restrict);

            // builder.Entity<Like>()
            //     .HasOne(u => u.Liker)
            //     .WithMany(u => u.Likee)
            //     .HasForeignKey(u => u.LikeeId)
            //     .OnDelete(DeleteBehavior.Restrict);
            
            // builder.Entity<Message>()
            //     .HasOne(u => u.Sender)
            //     .WithMany(m => m.MessagesSent)
            //     .OnDelete(DeleteBehavior.Restrict);
                            
            // builder.Entity<Message>()
            //     .HasOne(u => u.Recipient)
            //     .WithMany(m => m.MessagesReceived)
            //     .OnDelete(DeleteBehavior.Restrict);
        }
    }
}