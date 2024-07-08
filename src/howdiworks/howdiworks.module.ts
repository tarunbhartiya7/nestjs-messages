import { Module } from '@nestjs/common';
import { CpuModule } from './cpu/cpu.module';
import { DiskModule } from './disk/disk.module';
import { PowerModule } from './power/power.module';
import { ComputerController } from './computer.controller';

@Module({
  imports: [CpuModule, DiskModule, PowerModule],
  controllers: [ComputerController]
})
export class HowdiworksModule {}
